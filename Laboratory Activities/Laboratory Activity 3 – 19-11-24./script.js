const textInput = document.getElementById("textInput");
const wordCountElement = document.getElementById("wordcount");
const sentenceCountElement = document.getElementById("sentenceCount");

function updateCounts() {
    const text = textInput.value.trim();

    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    const sentences = text.split(/[.!?]\s+/).filter(sentence => sentence.length > 0);
    const sentenceCount = sentences.length;

    wordCountElement.textContent = `Words: ${wordCount}`;
    sentenceCountElement.textContent = `Sentences: ${sentenceCount}`;
}

textInput.addEventListener("input", updateCounts);
