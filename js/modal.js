document.addEventListener('DOMContentLoaded', function () {

    MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-custom-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true
    })
    $('[data-custom-open]').click(function () {
      $('.modal [name=form]').val($(this).data('form'))
    })
    $('[data-custom-close]').click(function () {
      $('.modal [name=form]').val('')
    })
  })