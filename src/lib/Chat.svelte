<script lang="ts">
    import ClipboardJS from "clipboard"

    export let text: string

    function clipboard(node: HTMLElement) {
        new ClipboardJS(node)
    }
</script>

<div class="mockup-code">
    <pre data-prefix="$"><code>{text}</code></pre>
    <pre data-prefix=">" class="text-success"><code
            class="cursor-pointer"
            data-clipboard-text={text}
            use:clipboard>Copy</code
        ></pre>
</div>
