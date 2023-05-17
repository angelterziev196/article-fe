import { modules } from './modules';
import { formats } from './formats';

import { useQuill } from 'react-quilljs';
import { SubmitButton } from '../SubmitButton/SubmitButton';

export const CreateArticle = (): JSX.Element => {
  const { quill, quillRef } = useQuill({ modules, formats });

  const handleSave = (): void => {
    const article = quill?.root.innerHTML;
    console.log(article);
  };

  return (
    <>
      <div className="h-full">
        <div ref={quillRef}></div>
      </div>
      <SubmitButton handleOnClick={handleSave} />
    </>
  );
};
