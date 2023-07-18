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
    const {quest} = {
      quest: {
        _c: {
          _t: 'AuditStamp',
          reqKey: 'Req/DvVAh2Q_XTApccqQIjn_sFhGrdOCsgfy',
          sessionKey:
            'Session/qb31pEx2GgJALelhUDgutdsqP7idFtmU9pHkgAhKkaWZfIgUZqs37sHY5S3mHbqw',
          time: 1688770039389,
        },
        _k: 'Quest/uqbgr3SvCTrRXuhVoUYFNmps1fJ2KOYb',
        _m: {
          _t: 'AuditStamp',
          reqKey: 'Req/TmV866ya1PhG46Juy7Go1bKRAv9UpQ-G',
          sessionKey:
            'Session/qb31pEx2GgJALelhUDgutdsqP7idFtmU9pHkgAhKkaWZfIgUZqs37sHY5S3mHbqw',
          time: 1689562781612,
        },
        _t: 'Quest',
        coverImageUrl:
          'https://imagedelivery.net/RlR0FzgLCXs5LrIq38SUew/e70e47ac-ffcb-4e91-cf1a-70d3c5a5fe00/public',
        description: {
          _t: 'TextPlain',
          text: 'We need some resident experts in different kind of outdoor activities. As an Outdoor Ambassador, you will help us host some fun activities this summer!',
        },
        detail: {
          _t: 'TextLexical',
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'This is Heading 1',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h1',
                type: 'heading',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Here is a longer paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in leo nibh. Donec et semper quam. Donec faucibus, nibh et gravida egestas.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'This is a quote.',
                    type: 'text',
                    version: 1,
                  },
                  {
                    type: 'linebreak',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Quest can be multi-line.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'quote',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Text can be in ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'bold',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ', ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 2,
                    mode: 'normal',
                    style: '',
                    text: 'italic',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ', or ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 8,
                    mode: 'normal',
                    style: '',
                    text: 'underlined',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '. Text can also be ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 16,
                    mode: 'normal',
                    style: '',
                    text: 'a monospaced code',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '.  Text also can be a ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'link',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    rel: 'noreferrer',
                    target: null,
                    title: null,
                    type: 'link',
                    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '. Text can also be ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 64,
                    mode: 'normal',
                    style: '',
                    text: 'a superscript',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ', ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 32,
                    mode: 'normal',
                    style: '',
                    text: 'a subscript',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ', or ',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 4,
                    mode: 'normal',
                    style: '',
                    text: 'a strikethrough',
                    type: 'text',
                    version: 1,
                  },
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Below is an empty line.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Here is the line after an empty line.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'This is Heading 2',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h2',
                type: 'heading',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Bullet list is also supported:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Bullet item 1.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    value: 1,
                    version: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Bullet item 2.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    value: 2,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
                type: 'list',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Numbered list too:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Numbered item 1.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    value: 1,
                    version: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Numbered item 2.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    value: 2,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                listType: 'number',
                start: 1,
                tag: 'ol',
                type: 'list',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'This is Heading 3',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h3',
                type: 'heading',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Fusce ornare, velit sed pretium laoreet, orci lectus tempus turpis, eu vestibulum neque quam dapibus tortor.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Indented paragraph. Morbi in diam a mauris elementum finibus vel sed elit. Donec sed volutpat nulla. Aliquam erat volutpat. Sed interdum dui non odio sagittis maximus.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 1,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Nullam vel odio eros. Cras elit ligula, feugiat in enim ut, lobortis fringilla tellus. Proin erat purus, volutpat ullamcorper metus ut, ultrices egestas nisi.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Right aligned.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: 'right',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Right aligned longer paragraph. Etiam pretium ante massa, eu sollicitudin libero vestibulum vel. Fusce luctus, urna vitae hendrerit ultricies, sem urna bibendum nunc, finibus rutrum dui lacus ac velit.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: 'right',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [],
                direction: 'ltr',
                format: 'right',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Center aligned, thank you.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: 'center',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
          text: 'This is Heading 1\n\nHere is a longer paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in leo nibh. Donec et semper quam. Donec faucibus, nibh et gravida egestas.\n\nThis is a quote.\nQuest can be multi-line.\n\nText can be in bold, italic, or underlined. Text can also be a monospaced code.  Text also can be a link. Text can also be a superscript, a subscript, or a strikethrough.\n\nBelow is an empty line.\n\n\n\nHere is the line after an empty line.\n\nThis is Heading 2\n\nBullet list is also supported:\n\nBullet item 1.\n\nBullet item 2.\n\nNumbered list too:\n\nNumbered item 1.\n\nNumbered item 2.\n\nThis is Heading 3\n\nFusce ornare, velit sed pretium laoreet, orci lectus tempus turpis, eu vestibulum neque quam dapibus tortor.\n\nIndented paragraph. Morbi in diam a mauris elementum finibus vel sed elit. Donec sed volutpat nulla. Aliquam erat volutpat. Sed interdum dui non odio sagittis maximus.\n\nNullam vel odio eros. Cras elit ligula, feugiat in enim ut, lobortis fringilla tellus. Proin erat purus, volutpat ullamcorper metus ut, ultrices egestas nisi.\n\nRight aligned.\n\nRight aligned longer paragraph. Etiam pretium ante massa, eu sollicitudin libero vestibulum vel. Fusce luctus, urna vitae hendrerit ultricies, sem urna bibendum nunc, finibus rutrum dui lacus ac velit.\n\n\n\nCenter aligned, thank you.',
        },
        endsAt: 1699401599000,
        ownerKey: 'Brand/zmN4YI5Hf60UaYmWUaZqn59Mkj5Lh1lP',
        questionList: {
          nodes: [
            {
              _k: 'Question/OHbWOTkuvyZya8AN7dh2tArOZ70MKu2X',
            },
            {
              _k: 'Question/6n4I2JmH9Pv26nZZTuZUKDvdtpLbvlX4',
            },
          ],
        },
        submissionAnswerEvalList: {
          nodes: [
            {
              _t: 'AnswerEval',
              criteria: {
                _t: 'AnswerEvalCriteriaSelectOne',
                selectedKey: {
                  _t: 'KeyCriteria',
                  within: [
                    'AnswerTypeSelectOption/82z4sw9m99OqjNyZ0ty3XSEyIIwhvxxF',
                    'AnswerTypeSelectOption/6nUcO1tP8sdk3qEWxCVQ2CoX69cYmvXY',
                    'AnswerTypeSelectOption/76GSCU2DvkGsTrtKQLyuS6bRKoR4P3xm',
                  ],
                },
              },
              questionKey: 'Question/OHbWOTkuvyZya8AN7dh2tArOZ70MKu2X',
              results: [
                {
                  _t: 'AnswerEvalResultTag',
                  score: 1,
                  title: 'Land Activity',
                },
              ],
            },
            {
              _t: 'AnswerEval',
              criteria: {
                _t: 'AnswerEvalCriteriaSelectOne',
                selectedKey: {
                  _t: 'KeyCriteria',
                  within: [
                    'AnswerTypeSelectOption/0zDVEqH8tMGxutOXJUqVodyqvce9hDAi',
                    'AnswerTypeSelectOption/W7duH6yQqDRVaZR6gHan6OCTkysD7CjQ',
                    'AnswerTypeSelectOption/LZAlKmQDOvTUWHpd3os3sj2IjBgQKSQH',
                    'AnswerTypeSelectOption/X02coj0iWe4LoBzkJMhU0rigglseXsRX',
                  ],
                },
              },
              questionKey: 'Question/OHbWOTkuvyZya8AN7dh2tArOZ70MKu2X',
              results: [
                {
                  _t: 'AnswerEvalResultTag',
                  score: 1,
                  title: 'Water Activity',
                },
              ],
            },
            {
              _t: 'AnswerEval',
              criteria: {
                _t: 'AnswerEvalCriteriaSelectMany',
                selectedKeys: {
                  _t: 'KeyArrayCriteria',
                  all: [
                    'AnswerTypeSelectOption/djGuqrHyzqSSullgh9RwmoXNv5ykqKZo',
                  ],
                },
              },
              questionKey: 'Question/6n4I2JmH9Pv26nZZTuZUKDvdtpLbvlX4',
              results: [
                {
                  _t: 'AnswerEvalResultTag',
                  score: 10,
                  title: 'Commitment',
                },
              ],
            },
          ],
        },
        submissionRewardList: {
          nodes: [
            {
              _k: 'Rule/KTzrntW5G9FlWok0bHOlp4oo5fqZpeo4',
            },
            {
              _k: 'Rule/h3Q0vLcFVh7oLeNZg9SoNWWzKkVoaxgq',
            },
          ],
        },
        submissionType: {
          _t: 'SubmissionTypeMany',
        },
        title: 'Will you be our Outdoor Ambassador this summer!?',
      },
    };
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
