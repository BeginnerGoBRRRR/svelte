<script lang="ts">
  export let text: string = "See More";
</script>

<button class="custom-button">
  <span>{text}</span>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

<style>
  .custom-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 8px 20px;
    border: 1px solid #000;
    border-radius: 9999px; /* pill shape */
    background-color: transparent;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease;
    max-width: 100%;
    white-space: nowrap;
  }

  .custom-button:hover {
    background-color: #f2f2f2;
  }

  .icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .custom-button {
      padding: 6px 16px;
      font-size: 13px;
      gap: 6px;
    }

    .icon {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 480px) {
    .custom-button {
      padding: 4px 12px;
      font-size: 12px;
      gap: 4px;
    }

    .icon {
      width: 12px;
      height: 12px;
    }
  }
</style>
