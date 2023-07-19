/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type {ElementFormatType, NodeKey} from 'lexical';

import '../ui/VantientQuestComponent.css';

import {format as formatDate} from 'date-fns';
import * as React from 'react';

import {BlockWithAlignableContents} from '../../../lexical-react/src/LexicalBlockWithAlignableContents';
import calendar from '../images/icons/calendar.svg';
import gift from '../images/icons/gift.svg';
import VantientButton from '../ui/VantientButton';

type VantientComponentProps = Readonly<{
  className: Readonly<{
    base: string;
    focus: string;
  }>;
  format: ElementFormatType | null;
  nodeKey: NodeKey;
  questID: string;
}>;

type Quest = {
  coverImageUrl: string;
  created: number;
  description: string;
  endsAt: number;
  title: string;
};

export default function VantientQuestComponent({
  className,
  format,
  nodeKey,
  questID,
}: VantientComponentProps) {
  const [questData, setQuestData] = React.useState<Quest | null>(null);
  React.useEffect(() => {
    fetch('http://localhost:3000/query/quest', {
      body: JSON.stringify({
        _k: `Quest/${questID}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then(({data}) => {
        const {quest} = data;
        if (!quest) return;
        setQuestData({
          coverImageUrl: quest.coverImageUrl,
          created: quest._c?.time,
          description: quest.description?.text,
          endsAt: quest.endsAt,
          title: quest.title,
        });
      });
  }, []);

  if (!questData) return null;

  const {title, description, coverImageUrl, created, endsAt} = questData;

  const renderDate = (start: number, end: number) => {
    if (start && end) {
      return `${formatDate(start, 'd MMM')} to ${formatDate(end, 'd MMM')}`;
    } else if (start && !end) {
      return `${formatDate(start, 'd MMM')} onwards`;
    }
  };

  return (
    <BlockWithAlignableContents
      className={className}
      format={format}
      nodeKey={nodeKey}>
      <div className="VantientQuestContainer">
        <div className="VantientQuestContent">
          <div className="VantientQuestImageContainer">
            <img
              alt=""
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="100vw"
              src={coverImageUrl}
            />
          </div>
          <div className="VantientQuestTextContainer">
            {title && <p className="VantientQuestTitle">{title}</p>}
            {description && (
              <p className="VantientQuestDescription">{description}</p>
            )}
          </div>
          <div className="VantientQuestGiftWrapper">
            <img
              alt="gift"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              src={gift}
            />
          </div>
        </div>
        <div className="VantientQuestButtonContainer">
          <VantientButton>Join quest</VantientButton>
        </div>
        <div className="VantientQuestFooterWrapper">
          <div className="VantientQuestFooter">
            <img
              alt="calendar"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              src={calendar}
            />
            <p>{renderDate(created, endsAt)}</p>
          </div>
        </div>
      </div>
    </BlockWithAlignableContents>
  );
}
