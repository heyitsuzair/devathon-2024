"use client";

export default async function copyToClipboard(copyText) {
  // Check if the Clipboard API is supported
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(copyText);
      console.log("Text copied to clipboard");
      return;
    } catch (error) {
      console.error("Failed to copy text using Clipboard API: ", error);
    }
  }

  // Fallback method using a temporary textarea
  try {
    const textarea = document.createElement("textarea");
    textarea.value = copyText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    console.log("Text copied to clipboard using fallback method");
  } catch (error) {
    console.error("Failed to copy text using fallback method: ", error);
  }
}
