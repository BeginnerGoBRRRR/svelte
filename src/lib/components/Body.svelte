<script lang="ts">
    export let title = "Live Better And Healthier";
    export let scrollTarget: HTMLElement | null = null;

    function handleScroll() {
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<section class="hero">
    <h1>{title}</h1>
    <button class="learn-more" on:click={handleScroll}>Learn more →</button>
    <div class="pagination">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <div class="scroll-down">SCROLL DOWN</div>
</section>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
        background-color: #ccc;
        text-align: center;
    }
    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }
    .learn-more {
        padding: 10px 20px;
        background-color: #fff;
        border: none;
        cursor: pointer;
        font-size: 1em;
        border-radius: 100px;
    }
    .pagination {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    .dot {
        height: 10px;
        width: 10px;
        background-color: #bbb;
        border-radius: 50%;
    }
    .dot.active {
        background-color: #717171;
    }
    .scroll-down {
        margin-top: 20px;
        font-size: 0.9em;
        color: #717171;
    }

    /* Responsive */
    @media screen and (max-width: 414px) {
        h1 {
            font-size: 1.8em;
        }
        .learn-more {
            font-size: 0.9em;
        }
        .dot {
            width: 8px;
            height: 8px;
        }
    }
</style>
