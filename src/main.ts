import { mount } from 'svelte'
import './app.css'
import 'flowbite/dist/flowbite.css'
import App from './App.svelte'
import { initFlowbite } from 'flowbite'

// Khởi tạo Flowbite sau khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  initFlowbite()
})

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
