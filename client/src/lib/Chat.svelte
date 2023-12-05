<script lang="ts">
    import ClipboardJS from "clipboard"

    export let text: string =
        "sasiodhsa d0sa90h 9d0sah90 hd9as0 dh0sa0 dhsa90h90d"

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
