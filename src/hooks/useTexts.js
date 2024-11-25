import { useTextsApi } from '@api';

const useTexts = () => {
  const { createText } = useTextsApi();

  const handleCreateText = async (good_id) => {
    const chapters = await createText(good_id);
    return chapters;
  };

  // const handleCreateChapter = async (name) => {
  //   const chapter = await createChapter(name);
  //   return chapter;
  // };

  // const handleUpdateChapter = async (id, name) => {
  //   const chapter = await updateChapter(id, name);
  //   return chapter;
  // };

  // const handleDeleteChapter = async (id) => {
  //   await deleteChapter(id)
  //   return;
  // };

  return {
    handleCreateText
  }
};

export default useTexts;
