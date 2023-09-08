/* eslint-env browser */
import { IndexeddbPersistence } from 'y-indexeddb'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { ySyncPlugin, yCursorPlugin, yUndoPlugin, undo, redo } from 'y-prosemirror'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { schema } from './schema.js'
import { exampleSetup } from 'prosemirror-example-setup'
import { keymap } from 'prosemirror-keymap'

let docNum = 0;
window.addEventListener('load', () => {
  const ydoc = new Y.Doc()
  const roomName = 'my-room-name'
  const persistence = new IndexeddbPersistence(roomName, ydoc)
  const provider = new WebsocketProvider('ws://test-6pvnca4zhq-an.a.run.app/', 'prosemirror-demo', ydoc)
  const yXmlFragment = ydoc.getXmlFragment('prosemirror')

  const editor = document.createElement('div')
  editor.setAttribute('id', 'editor')
  const editorContainer = document.createElement('div')
  editorContainer.insertBefore(editor, null)
  const prosemirrorView = new EditorView(editor, {
    state: EditorState.create({
      schema,
      plugins: [
        ySyncPlugin(yXmlFragment),
        yCursorPlugin(provider.awareness),
        yUndoPlugin(),
        keymap({
          'Mod-z': undo,
          'Mod-y': redo,
          'Mod-Shift-z': redo
        })
      ].concat(exampleSetup({ schema }))
    })
  })
  document.body.insertBefore(editorContainer, null)

  const switchDocBtn = /** @type {HTMLElement} */ (document.getElementById('switch-doc-btn'))
  const connectBtn = /** @type {HTMLElement} */ (document.getElementById('y-connect-btn'))
  switchDocBtn.addEventListener('click', () => {
    if (docNum == 0) {
      docNum = 1
      switchDocBtn.textContent = 'DocNum: 1'
    } else {
      docNum = 0
      switchDocBtn.textContent = 'DocNum: 0'
    }
  })
  connectBtn.addEventListener('click', () => {
    if (provider.shouldConnect) {
      provider.disconnect()
      connectBtn.textContent = 'Connect'
    } else {
      provider.connect()
      connectBtn.textContent = 'Disconnect'
    }
  })

  // @ts-ignore
  window.example = { provider, ydoc, yXmlFragment, prosemirrorView }
})
