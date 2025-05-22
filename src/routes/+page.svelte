<script lang="ts">
  import { 
    Button, 
    Card, 
    Navbar, 
    NavBrand, 
    NavLi, 
    NavUl, 
    NavHamburger,
    Avatar,
    Badge,
    Alert,
    Timeline,
    TimelineItem
  } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Trang chủ</NavLi>
    <NavLi href="/about">Giới thiệu</NavLi>
    <NavLi href="/services">Dịch vụ</NavLi>
    <NavLi href="/pricing">Bảng giá</NavLi>
    <NavLi href="/contact">Liên hệ</NavLi>
  </NavUl>
</Navbar>

<div class="container mx-auto px-4 py-8">
  <Alert color="blue" class="mb-6">
    <span class="font-medium">Chào mừng!</span> Đây là trang mẫu sử dụng Flowbite và SvelteKit.
  </Alert>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <Card>
      <div class="flex flex-col items-center pb-10">
        <Avatar size="lg" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-4">Nguyễn Văn A</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Lập trình viên</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <Button color="blue">Thêm bạn</Button>
          <Button color="gray">Nhắn tin</Button>
        </div>
      </div>
    </Card>

    <Card>
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        Tiến độ dự án
      </h5>
      <div class="space-y-4">
        <div>
          <div class="flex justify-between mb-2">
            <span class="text-base font-medium text-blue-700 dark:text-white">Thiết kế UI</span>
            <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-2">
            <span class="text-base font-medium text-green-700 dark:text-white">Phát triển</span>
            <span class="text-sm font-medium text-green-700 dark:text-white">70%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-green-600 h-2.5 rounded-full" style="width: 70%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-2">
            <span class="text-base font-medium text-purple-700 dark:text-white">Kiểm thử</span>
            <span class="text-sm font-medium text-purple-700 dark:text-white">30%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-purple-600 h-2.5 rounded-full" style="width: 30%"></div>
          </div>
        </div>
      </div>
    </Card>

    <Card>
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        Thống kê
      </h5>
      <div class="flex flex-wrap gap-2">
        <Badge color="blue">SvelteKit</Badge>
        <Badge color="gray">Tailwind</Badge>
        <Badge color="green">Flowbite</Badge>
        <Badge color="red">TypeScript</Badge>
        <Badge color="yellow">Vite</Badge>
        <Badge color="purple">PostCSS</Badge>
      </div>
    </Card>
  </div>

  <div class="space-y-8">
    <TimelineItem title="Khởi tạo dự án" date="Tháng 2, 2024">
      Bắt đầu xây dựng dự án với SvelteKit và Flowbite.
    </TimelineItem>
    <TimelineItem title="Phát triển tính năng" date="Tháng 3, 2024">
      Triển khai các tính năng chính của ứng dụng.
    </TimelineItem>
    <TimelineItem title="Hoàn thiện" date="Tháng 4, 2024">
      Kiểm thử và tối ưu hóa hiệu suất.
    </TimelineItem>
  </div>
</div> 