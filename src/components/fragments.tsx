import {JSX} from 'react'
import Code from './code';
import CodeCopy from './codeCopy';
interface FragmentProps {
    type: 'code' | 'copy';
    content: string;
}

const Fragments = ({type, content}:FragmentProps):JSX.Element => {
  switch (type) {
    case "code":
        return <Code />;
    case "copy": 
        return <CodeCopy />
    default:
        return <></>;
  }
}

export default Fragments
