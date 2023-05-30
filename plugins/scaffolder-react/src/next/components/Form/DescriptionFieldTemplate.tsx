/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';

import { MarkdownContent } from '@backstage/core-components';
import { makeStyles, Typography } from '@material-ui/core';
import {
  DescriptionFieldProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

const useStyles = makeStyles({
  markdownDescription: {
    fontSize: '0.75rem',
    margin: 0,
    marginTop: '5px',
    color: 'rgba(0, 0, 0, 0.54)',
    '& p:first-child': {
      margin: 0,
    },
  },
});

/** The `DescriptionField` is the template to use to render the description of a field
 * @alpha
 * @param props - The `DescriptionFieldProps` for this component
 */
export const DescriptionFieldTemplate = <
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(
  props: DescriptionFieldProps<T, S, F>,
) => {
  const { id, description } = props;
  const classes = useStyles();

  if (description) {
    if (typeof description === 'string') {
      return (
        <MarkdownContent
          content={description}
          className={classes.markdownDescription}
        />
      );
    }

    return (
      <Typography id={id} variant="subtitle2" style={{ marginTop: '5px' }}>
        {description}
      </Typography>
    );
  }

  return null;
};
