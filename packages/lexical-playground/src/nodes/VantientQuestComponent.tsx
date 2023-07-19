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
import questJson from '../fixtures/quest.json';
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

export default function VantientQuestComponent({
  className,
  format,
  nodeKey,
  questID,
}: VantientComponentProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [questData, setQuestData] = React.useState<any>(null);
  React.useEffect(() => {
    // TODO: Enable Fetch call after CORS error is fixed
    // fetch('https://cmty.space/api/query/quest', {
    //   body: JSON.stringify({
    //     _k: `Quest/uqbgr3SvCTrRXuhVoUYFNmps1fJ2KOYb`,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    const {quest} = questJson;
    setQuestData({
      coverImageUrl: quest.coverImageUrl,
      created: quest._c.time,
      description: quest.description.text,
      endsAt: quest.endsAt,
      title: quest.title,
    });
  }, []);

  if (!questData) return null;

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
              src={questData.coverImageUrl}
            />
          </div>
          <div className="VantientQuestTextContainer">
            <p className="VantientQuestTitle">{questData.title}</p>
            <p className="VantientQuestDescription">{questData.description}</p>
          </div>
          <div className="VantientQuestGiftWrapper">
            <img
              alt="gift"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              data-nimg="1"
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
              data-nimg="1"
              src={calendar}
            />
            <p>
              {formatDate(questData.created, 'd MMM')} to{' '}
              {formatDate(questData.endsAt, 'd MMM')}
            </p>
          </div>
        </div>
      </div>
    </BlockWithAlignableContents>
  );
}
