<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { useGoods, useChapters, useTexts } from '@hooks';
import { useNotificationStore } from '@store'
import Chapters from './blocks/Chapters.vue';
import Script from './blocks/Script.vue';

const notification = useNotificationStore();

const {
  handleGetGoods,
  handleGetScript,
} = useGoods();

const {
  handleGetChapters,
  handleCreateChapter,
  handleUpdateChapter,
  handleDeleteChapter,
} = useChapters();

const {
  handleCreateText
} = useTexts();

const good = reactive({});
const goods = reactive([]);
const script = reactive([]);

const chapters = reactive([]);
// const currentChapterId = ref(null);

const handleChangeGood = async (val) => {
  good.id = val.id
  good.good_id = val.good_id;
  good.good_name = val.good_name;
  const data = await handleGetChapters(val.id);
  chapters.splice(0, chapters.length, ...data);
};

const handleChangeScript = async (val) => {
  // currentChapterId.value = val.chapter_id;
  const data = await handleGetScript(val.id);
  script.splice(0, script.length, ...data);
};

const handleChangeScriptByButton = async (val) => {
  // here i need to get next_chapter_id from buttons
  // currentChapterId.value = val.next;
  const data = await handleGetScript(val.next_text_id);
  script.splice(0, script.length, ...data);
};

const handleAddChapter = () => {
  if(!good.id) return notification.show('Выберите продукт!', 'error');
  chapters.unshift({
    id: null,
    name: null,
  });
};

const handleOpenChapter = (chapter) => {
  chapter.isMenuOpen = !chapter.isMenuOpen
}

const handleEditChapter = (chapter_id) => {
  const index = chapters.findIndex((c) => c.id === chapter_id);
  if (index !== -1) {
    chapters[index].isEditable = !chapters[index].isEditable;
  }
};

const handleSaveChapterName = async (chapter) => {
  handleEditChapter(chapter.id);
  let data = null;
  if(!chapter.id) {
    data = await handleCreateChapter(chapter.name);
    chapters.shift();
    chapters.push(data);
  } else {
    data = await handleUpdateChapter(chapter.id, chapter.name);
  }

  notification.show('Раздел успешно создан!', 'success');
}

const handleDestroyChapter = async (chapter_id) => {
  const confirm = window.confirm('Вы уверены?')
  if (!confirm) return;

  if(!chapter_id) {
    chapters.splice(
      0,
      chapters.length,
      ...chapters.filter((chapter) => chapter.id !== null)
    );
  } else {
    await handleDeleteChapter(chapter_id);
    chapters.splice(
      0,
      chapters.length,
      ...chapters.filter((chapter) => chapter.id !== chapter_id)
    );
  }
};

const handleAddText = async (chapter_id) => {
  const data = await handleCreateText(chapter_id);

};

onMounted(async () => {
  const data = await handleGetGoods();
  goods.splice(0, goods.length, ...data);
})

// watch(() => chapters, (newVal, oldVal) => {
//   console.log("newVal", newVal);
//   console.log("oldVal", oldVal);
// }, { deep: true });
</script>

<template>
  <div class="h-[80vh] flex items-center justify-center gap-8 p-8 bg-pink-100">
    <Chapters
      :good="good"
      :goods="goods"
      :handleChangeGood="handleChangeGood"
      :chapters="chapters"
      :handleChangeScript="handleChangeScript"
      :handleOpenChapter="handleOpenChapter"
      :handleAddChapter="handleAddChapter"
      :handleEditChapter="handleEditChapter"
      :handleSaveChapterName="handleSaveChapterName"
      :handleDestroyChapter="handleDestroyChapter"
      :handleAddText="handleAddText"
    />

    <Script
      :script="script"
      :chapters="chapters"
      :handleChangeScriptByButton="handleChangeScriptByButton"
    />
  </div>
</template>
