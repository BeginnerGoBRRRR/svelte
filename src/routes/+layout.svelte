<script>
  import '../app.css';
  import 'flowbite/dist/flowbite.css';
  import { initFlowbite } from 'flowbite';
  import { onMount } from 'svelte';

  onMount(() => {
    initFlowbite();
  });
</script>

<slot /> 