import React from 'react';

import { ReactComponent as PhpIcon } from '../../assets/php.svg';
import { ReactComponent as JavascriptIcon } from '../../assets/javascript.svg';
import { ReactComponent as HtmlIcon } from '../../assets/html-5.svg';
import { ReactComponent as CssIcon } from '../../assets/css-3.svg';
import { ReactComponent as ReactIcon } from '../../assets/react.svg';
import { ReactComponent as TypeScriptIcon } from '../../assets/typescript.svg';
import { ReactComponent as PythonIcon } from '../../assets/python.svg';
import { ReactComponent as RLanguageIcon } from '../../assets/r-language.svg';
import { ReactComponent as BootstrapIcon } from '../../assets/bootstrap.svg';
import { ReactComponent as DrupalIcon } from '../../assets/drupal.svg';
import { ReactComponent as NodeJsIcon } from '../../assets/nodejs.svg';
import { ReactComponent as MySqlLogo } from '../../assets/mysql.svg';
import { ReactComponent as MongodbIcon } from '../../assets/mongodb.svg';

type Props = {
  name: string;
};

export const Icon = ({ name }: Props) => {
  switch (name) {
    case 'PHP':
      return <PhpIcon width={64} height={64} />;

    case 'JavaScript':
      return <JavascriptIcon width={64} height={64} />;

    case 'HTML5':
      return <HtmlIcon width={64} height={64} />;

    case 'CSS3':
      return <CssIcon width={64} height={64} />;

    case 'React':
      return <ReactIcon width={64} height={64} />;

    case 'TypeScript':
      return <TypeScriptIcon width={64} height={64} />;

    case 'Python':
      return <PythonIcon width={64} height={64} />;

    case 'R':
      return <RLanguageIcon width={64} height={64} />;

    case 'Bootstrap':
      return <BootstrapIcon width={64} height={64} />;

    case 'Drupal':
      return <DrupalIcon width={64} height={64} />;

    case 'Node.js':
      return <NodeJsIcon width={64} height={64} />;

    case 'MySQL':
      return <MySqlLogo width={64} height={64} />;

    case 'Mongodb':
      return <MongodbIcon width={64} height={64} />;

    default:
      return null;
  }
};
