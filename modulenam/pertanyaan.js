function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}
	var ql = new Question('Apakah anda tahu tentang Pemrograman Web?',
	['Tahu', 'Tidak'],
	'0'); 
	var q2 = new Question('Kuliah apa Hari Senin?',
	['Basisdata', 'Pemrograman Web', 'IKD', 'Religiusitas'],
	'1');
	var q3 = new Question('Apakah anda pernah membuat program android?',
	['Pernah', 'Belum Pernah', 'Belum Pernah Sama Sekali'],
	'1');
	var q4 = new Question('Tag awal yang digunakan dalam pembuatan html adalah?',
	['< a>', '< b>','< p>','<html>'],
	'3');
	var q5 = new Question('Dikota apa STIKOM YOS SUDARSO berada?',
	['Cilacap', 'Purwokerto', 'Semarang','Bandung'],
	'1');
    var q6 = new Question('Siapakah dosen pengampu Pemrograman Web?',
	['Oskar', 'Lynawati','Padosroha','Carolina Ety'],
	'0');
   var q7 = new Question('Dijalan apakah STIKOM YOS SUDARSO?', ['Jl. SMP 5', 'JL. SMP 7'], '0');
    var q8 = new Question('Apa guna function dalam Javascript ?',
	['menyatukan beberapa perintah', 'menentukan jenis bahasa yang dipakai'],
	'0');
    var q9 = new Question('Berapakah dua ditambah satu',
	['dua', 'tiga'],
	'1');
    var q10 = new Question('Siapakah nama saya?',
                          ['Gita', 'Hana', 'Falen', 'Lusi'],
                          '2');
    
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};