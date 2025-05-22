<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import { 
    Button, 
    Card, 
    Heading, 
    Spinner,
    Accordion,
    AccordionItem,
    Avatar,
    Badge,
    Alert,
    Tabs,
    TabItem
  } from 'flowbite-svelte'
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
  <div class="flex gap-8 mb-8">
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="h-24 transition-all hover:scale-110" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="h-24 transition-all hover:scale-110" alt="Svelte Logo" />
    </a>
  </div>
  
  <Heading tag="h1" class="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white">
    Vite + Svelte + Tailwind + Flowbite
  </Heading>

  <Alert color="blue" class="mb-6 max-w-lg">
    <span class="font-medium">Thư viện Flowbite</span> đã được tích hợp thành công!
  </Alert>

  <Card class="max-w-lg mb-8">
    <div class="flex flex-col items-center p-6 text-gray-700 dark:text-gray-200">
      <h2 class="text-2xl font-bold mb-4">Thành phần Flowbite</h2>
      
      <Tabs style="underline">
        <TabItem open title="Buttons">
          <div class="flex flex-col gap-4 w-full items-center mt-4">
            <div class="flex flex-wrap gap-2 justify-center">
              <Button color="blue">Blue</Button>
              <Button color="green">Green</Button>
              <Button color="red">Red</Button>
              <Button color="yellow">Yellow</Button>
              <Button color="purple">Purple</Button>
            </div>
            <div class="flex flex-wrap gap-2 justify-center">
              <Button outline color="blue">Outline</Button>
              <Button pill color="green">Pill</Button>
              <Button size="xs">Extra small</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </TabItem>
        <TabItem title="Badges">
          <div class="flex flex-wrap gap-2 justify-center mt-4">
            <Badge>Default</Badge>
            <Badge color="gray">Gray</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="yellow">Yellow</Badge>
            <Badge color="indigo">Indigo</Badge>
            <Badge color="purple">Purple</Badge>
            <Badge color="pink">Pink</Badge>
          </div>
        </TabItem>
        <TabItem title="Avatar">
          <div class="flex flex-wrap gap-4 justify-center mt-4">
            <Avatar />
            <Avatar src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
            <Avatar size="xs" />
            <Avatar size="lg" />
            <Avatar class="rounded-full" />
          </div>
        </TabItem>
      </Tabs>
    </div>
  </Card>

  <Accordion class="max-w-lg mb-8">
    <AccordionItem>
      <svelte:fragment slot="header">Accordion item 1</svelte:fragment>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite là một thư viện giao diện người dùng mã nguồn mở dựa trên Tailwind CSS.
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        Nó cung cấp nhiều thành phần đã được thiết kế sẵn để xây dựng giao diện web nhanh chóng.
      </p>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="header">Accordion item 2</svelte:fragment>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite Svelte là phiên bản Svelte của Flowbite, được thiết kế để hoạt động tốt với Svelte.
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        Nó giúp bạn xây dựng giao diện người dùng đẹp mắt với ít mã hơn.
      </p>
    </AccordionItem>
  </Accordion>

  <p class="text-gray-600 dark:text-gray-400 text-center">
    Xem thêm <a href="https://flowbite-svelte.com/" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noreferrer">Flowbite Svelte</a> 
    để biết thêm nhiều thành phần hữu ích!
  </p>
</main>
