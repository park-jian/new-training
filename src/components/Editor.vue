<template>
  <div class="hello">
       <!-- Text 편집 버튼 영역 시작 -->
      <div v-if="editor">
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        h1
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        h2
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        h3
      </button>
      <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        paragraph
      </button>
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        bold
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        italic
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        strike
      </button>
      <button @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }">
        highlight
      </button>
      <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
        left
      </button>
      <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
        center
      </button>
      <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
        right
      </button>
      <button @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
        justify
      </button>
       <button @click="addImage">
      이미지
       </button>
       <!-- <button @click="addIframe">
      동영상
    </button> -->
    </div>
    <!-- Text 편집 버튼 영역 끝 -->

    <!-- 게시글 작성부분 시작-->
    <div class="contextBox">
      <editor-content :editor="editor" />
    </div>
    <!-- 게시글 작성부분 끝-->
  </div>
</template>

<script>
import { Editor, EditorContent,EditorMenuBar } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'
// import Iframe from './iframe'
export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: null,
    }
  },
  name: 'HelloWorld',
   methods: {
    addImage() {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    },
    // addIframe() {
    //   const url = window.prompt('URL')

    //   if (url) {
    //     this.editor.chain().focus().setIframe({ src: url }).run()
    //   }
    // },
  },
  mounted() {
    this.editor = new Editor({
      content: 
      `
       <h3 style="text-align:center">
          잘 되는지 테스트중입니당닫앋아다앙다아!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~
          참고사이트
          https://tiptap.dev/examples/menus
        </h3>
      <p>I’m running Tiptap with Vue.js. 🎉</p>
      <p>안녕하세요. 테스트중1입니다.</p>

      <p>이미지 테스트 url</p>
      <p>https://source.unsplash.com/8xznAGy4HcY/800x400</p>
      <p>이미지테스트 url</p>
      <p>https://source.unsplash.com/K9QHL52rE2k/800x400</p>
      <p>안녕하세요. 테스트중4입니다.</p>

      <p>안녕하세요. 테스트중5입니다.</p>

`
      ,
      extensions: [
        StarterKit,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Highlight,
         Document,
        Paragraph,
        Text,
        Image,
        Dropcursor,
        //  Iframe,
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contextBox{
  border:1px solid black;
}
</style>
