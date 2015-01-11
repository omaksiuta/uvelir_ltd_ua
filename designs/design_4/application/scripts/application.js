$(function() {
    var isAttachFile = $('#application_is_attach_file');
	if (isAttachFile.length > 0) {
		function attachFileText()
		{
            var attachFileText = $('.attach_file_text');
			if (isAttachFile.attr('checked') == false || isAttachFile.attr('checked') == undefined) {
				attachFileText.hide();
			}
			else {
				attachFileText.show();
			}
		}

		attachFileText();
		isAttachFile.bind('change', attachFileText);
	}

    var dateField = $('.panda-application-field__date');
	if(dateField.length)
	{
        dateField.datePicker({
			clickInput: true,
			startDate: '01.01.1900',
			endDate: '31.12.2030',
			createButton: true
		});
	}

	$('.choice-many').bind('click', choiceManyAddCheked);

	function choiceManyAddCheked() {
		if (this.checked)
			$(this).attr("checked", "checked");
		else
			$(this).removeAttr("checked");
	}
	$('.select').change(function(){
		$(".select option:selected").attr('selected', 'selected')
	});
});