$('#F__ID').submit(function(event){
	event.preventDefault();
	var data = {};
	var a = $("#F__ID").serializeArray();
	$.each(a, function () {
		if (data[this.name]) {
			if (!data[this.name].push) {
				data[this.name] = [data[this.name]];
			}
			data[this.name].push(this.value || '');
		}
		else {
			data[this.name] = this.value || '';
		}
	});

	data.Participant=$vm.coq_participant;
	data.Participant_uid=$vm.coq_participant_uid;
	var dbv={
		S1:$vm.coq_visit,
		PPID:$vm.coq_participant_pid,
		PUID:$vm.coq_participant_uid,
	}
	//-------------------------------------
	var req={cmd:"add_json_record_s2",db_pid:$vm.vm["__ID"].op.sys.config.db_pid,data:data,dbv:dbv};
	$VmAPI.request({data:req,callback:function(res){
		if(res.ret<=0)	alert("Sorry there is a problem. You can try again later or wait until you are at Woolcock.")
		else window.history.back(-1);
	}});
	//-------------------------------------
});
