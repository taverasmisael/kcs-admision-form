<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
header('Content-type: text/plain; charset=utf-8');

class MainClass
{
	#CONFIG
	protected $gmailAccount = "";
	protected $gmailPassword = "";
	protected $emailTo = "macrot29@gmail.com";
	protected $subject = "[KCS Admision] — Familias: ";
	protected $headline = "<main style='font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"'><div style='margin-bottom: 2rem;'><img src='http://www.kcs.edu.do/home/3906/3906/images/favicon.ico' style='display: inline-block; margin-right: 3rem; max-width: 100%; vertical-align: middle; width: 15%;'/> <h1 style='display: inline-block; vertical-align: middle; text-align: center; width: 70%;'>Admision Form<br /><small style='font-size: .4em;'>Completado</small></h1> </div>";


	#Render the array to html
	public function getHtmlByArray($array, $text = "")
	{
		foreach($array AS $key => $value)
		{
			if(is_array($value))
			{
				$text .= "<div style='margin: 0; padding: 0; box-sizing:border-box;font-size:18px;margin:0;padding:0'><h2 style='margin: 0; padding: 0; background:#014e93;box-sizing:border-box;color:#fff;line-height:2;margin:0;margin-bottom:1rem;padding:1em;text-align:center'>$key</h2><ul style='box-sizing:border-box;list-style:none;margin:0;padding:0'>".$this->getHtmlByArray($value)."</ul></div>";
			}
			else
			{
				$text .= "<li style='margin: 0; padding: 0; box-sizing:border-box;margin:0;margin-bottom:.75rem;padding:0;padding-left:.75rem'><strong style='margin: 0; padding: 0; box-sizing:border-box;color:#121212;margin:0;padding:0'>".$key."</strong>: ". $value."</li>";
			}
		}

		return $text;
	}

	#send data to client email
	public function send($data)
	{
		$mail = new PHPMailer(false); 

	    //Server settings
	    $mail->isSMTP();
	    $mail->Host = 'smtp.gmail.com';
	    $mail->SMTPAuth = true;
	    $mail->Username = $this->gmailAccount;
	    $mail->Password = $this->gmailPassword;
	    $mail->SMTPSecure = 'tls';
			$mail->Port = 587;
			$mail->CharSet = 'UTF-8';
	    //Recipients
	    $mail->setFrom($this->gmailAccount, 'Admisiones KCS');
	    $mail->addAddress($this->emailTo, '');


	    //Content
	    $mail->isHTML(true);                                 
	    $mail->Subject = $this->subject.$data["FatherInfo"]["Lastname"]." ".$data["MotherInfo"]["Lastname"]; 
	    $mail->Body = $this->headline.$this->getHtmlByArray($data)."</div>";

	    if(!$mail->Send()) 
			echo json_encode(["success" => 0, "mail"=> $mail]);
		else
			echo json_encode(["success" => 1]);


	}
	
}
