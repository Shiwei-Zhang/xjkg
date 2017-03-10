	$(document).ready(function() {

			$('#config-text').keyup(function() {
				eval($(this).val());
			});

			$('.demo i').click(function() {
				$(this).parent().find('input').click();
			});
			updateConfig();

			function updateConfig() {
				var options = {};
				options.timePicker = true;
				options.singleDatePicker = true;
				$('#rtl-wrap').show();
				options.locale = {
					direction: $('#rtl').is(':checked') ? 'rtl' : 'ltr',
					format: 'YYYY-MM-DD HH:mm',
					separator: ' - ',
					applyLabel: 'Apply',
					cancelLabel: 'Cancel',
					fromLabel: 'From',
					toLabel: 'To',
					customRangeLabel: 'Custom',
					daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
					monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					firstDay: 1
				};

				$('#config-text').val("$('#demo').daterangepicker(" + JSON.stringify(options, null, '    ') + ", function(start, end, label) {\n  console.log(\"New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')\");\n});");

				$('#config-demo').daterangepicker(options, function(start, end, label) {
					console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
				});

			}

		});