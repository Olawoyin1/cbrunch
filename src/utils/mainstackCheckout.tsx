// src/utils/mainstackCheckout.ts
export const openMainstackCheckout = () => {
  const hiddenBtn = document.getElementById("mainstack_checkout_btn") as HTMLButtonElement | null;
  if (hiddenBtn) {
    // Try to trigger Mainstack's bound handler by clicking the hidden button
    hiddenBtn.click();

    // Small defensive check: if nothing happens within 500ms, show iframe manually
    setTimeout(() => {
      const iframe = document.getElementById("mainstack_checkout_iframe") as HTMLIFrameElement | null;
      if (iframe && getComputedStyle(iframe).display === "none") {
        iframe.style.display = "block";
        console.warn("Mainstack script didn't open popup; showing iframe as fallback.");
      }
    }, 500);
    return;
  }

  // Fallback: if hiddenBtn is not present for some reason, show the iframe directly
  const iframe = document.getElementById("mainstack_checkout_iframe") as HTMLIFrameElement | null;
  if (iframe) iframe.style.display = "block";
};
