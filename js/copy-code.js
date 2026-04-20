document.addEventListener('DOMContentLoaded', function() {
  var codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(function(block) {
    if (block.querySelector('.copy-btn')) return;
    
    block.style.position = 'relative';
    
    var defaultIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><rect x="9" y="9" width="13" height="13" rx="0" ry="0"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    var successIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    var errorIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';

    var copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.setAttribute('type', 'button');
    copyBtn.setAttribute('aria-label', 'Copy code');
    copyBtn.setAttribute('title', 'Copy code');
    copyBtn.innerHTML = defaultIcon;

    function resetButton() {
      copyBtn.innerHTML = defaultIcon;
      copyBtn.classList.remove('copied');
      copyBtn.classList.remove('copy-failed');
      copyBtn.setAttribute('aria-label', 'Copy code');
      copyBtn.setAttribute('title', 'Copy code');
    }
    
    function showSuccess() {
      copyBtn.innerHTML = successIcon;
      copyBtn.classList.add('copied');
      copyBtn.classList.remove('copy-failed');
      copyBtn.setAttribute('aria-label', 'Copied');
      copyBtn.setAttribute('title', 'Copied');
      setTimeout(function() {
        resetButton();
      }, 2000);
    }

    function showError(error) {
      console.error('Failed to copy code block:', error);
      copyBtn.innerHTML = errorIcon;
      copyBtn.classList.remove('copied');
      copyBtn.classList.add('copy-failed');
      copyBtn.setAttribute('aria-label', 'Copy failed');
      copyBtn.setAttribute('title', 'Copy failed');
      setTimeout(function() {
        resetButton();
      }, 2000);
    }
    
    function copyText() {
      var code = block.querySelector('code') || block;
      var text = code.innerText || code.textContent || '';

      if (!navigator.clipboard || !window.isSecureContext) {
        showError(new Error('Clipboard API unavailable (requires secure context).'));
        return;
      }

      navigator.clipboard.writeText(text).then(showSuccess).catch(showError);
    }
    
    copyBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      copyText();
    };
    
    copyBtn.ontouchend = function(e) {
      e.preventDefault();
      e.stopPropagation();
      copyText();
    };
    
    block.appendChild(copyBtn);
  });
});
