/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  ElementFormatType,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  Spread,
} from 'lexical';

import {
  DecoratorBlockNode,
  SerializedDecoratorBlockNode,
} from '@lexical/react/LexicalDecoratorBlockNode';
import * as React from 'react';

const VantientQuestComponent = React.lazy(
  // @ts-ignore
  () => import('./VantientQuestComponent'),
);

export type SerializedVantientQuestNode = Spread<
  {
    questID: string;
  },
  SerializedDecoratorBlockNode
>;

function convertVantientQuestElement(
  domNode: HTMLElement,
): null | DOMConversionOutput {
  const questID = domNode.getAttribute('data-lexical-vantient-quest');
  if (questID) {
    const node = $createVantientQuestNode(questID);
    return {node};
  }
  return null;
}

function exportVantientQuestToHTML(questId: string): HTMLElement {
  const element = document.createElement('div');
  element.innerHTML = questId;
  return element;
}

export class VantientQuestNode extends DecoratorBlockNode {
  __id: string;

  static getType(): string {
    return 'vantient-quest';
  }

  static clone(node: VantientQuestNode): VantientQuestNode {
    return new VantientQuestNode(node.__id, node.__format, node.__key);
  }

  static importJSON(
    serializedNode: SerializedVantientQuestNode,
  ): VantientQuestNode {
    const node = $createVantientQuestNode(serializedNode.questID);
    node.setFormat(serializedNode.format);
    return node;
  }

  exportJSON(): SerializedVantientQuestNode {
    return {
      ...super.exportJSON(),
      questID: this.__id,
      type: 'vantient-quest',
      version: 1,
    };
  }

  constructor(id: string, format?: ElementFormatType, key?: NodeKey) {
    super(format, key);
    this.__id = id;
  }

  exportDOM(): DOMExportOutput {
    return {element: exportVantientQuestToHTML(this.__id)};
  }

  static importDOM(): DOMConversionMap | null {
    return {
      quest: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-vantient-quest')) {
          return null;
        }
        return {
          conversion: convertVantientQuestElement,
          priority: 1,
        };
      },
    };
  }

  updateDOM(): false {
    return false;
  }

  getId(): string {
    return this.__id;
  }

  getTextContent(
    _includeInert?: boolean | undefined,
    _includeDirectionless?: false | undefined,
  ): string {
    return `test`;
  }

  decorate(_editor: LexicalEditor, config: EditorConfig): JSX.Element {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || '',
      focus: embedBlockTheme.focus || '',
    };
    return (
      <React.Suspense>
        <VantientQuestComponent
          className={className}
          format={this.__format}
          nodeKey={this.getKey()}
          questID={this.__id}
        />
      </React.Suspense>
    );
  }
}

export function $createVantientQuestNode(questID: string): VantientQuestNode {
  return new VantientQuestNode(questID);
}

export function $isVantientQuestNode(
  node: VantientQuestNode | LexicalNode | null | undefined,
): node is VantientQuestNode {
  return node instanceof VantientQuestNode;
}
