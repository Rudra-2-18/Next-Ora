document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiry-form");
  const feedback = document.getElementById("form-feedback");
  const submitButton = document.getElementById("submit-btn");

  if (!form || !feedback || !submitButton) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const serviceChecked = form.querySelector('input[name="services[]"]:checked');
    if (!serviceChecked) {
      showFeedback("Please select at least one service.", "error");
      return;
    }

    setButtonLoading(true);
    showFeedback("", "");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
        },
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        showFeedback(result.message || "Submission failed. Please review details and try again.", "error");
        return;
      }

      showFeedback(result.message || "Thank you. Your inquiry has been submitted successfully.", "success");
      form.reset();
    } catch (error) {
      showFeedback("Network issue. Please try again or contact us directly on WhatsApp.", "error");
    } finally {
      setButtonLoading(false);
    }
  });

  function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.classList.remove("success", "error");
    if (type) feedback.classList.add(type);
  }

  function setButtonLoading(isLoading) {
    submitButton.disabled = isLoading;
    submitButton.classList.toggle("loading", isLoading);

    const textNode = submitButton.querySelector(".btn-text");
    if (textNode) {
      textNode.textContent = isLoading ? "Submitting..." : "Submit Inquiry";
    }
  }
});
