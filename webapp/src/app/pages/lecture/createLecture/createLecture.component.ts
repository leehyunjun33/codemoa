import { Component, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { GetinfoProvider } from '../../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './createLecture.component.html'
})
export class CreateLectureComponent implements AfterViewInit{
  subtitle: string;
  data : any = [];

  apiUrl = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000';

  constructor(private router: Router, private route: ActivatedRoute, public getinfoProvider: GetinfoProvider, private location: Location,  private http: HttpClient) {
    this.subtitle = 'createLecture';
    console.log(this.subtitle);

  
  }

  creatLecture(form, files: FileList){    
    console.log(form.value);
    console.log(form.value.l_img);

    const formData = new FormData();
    formData.append('avatar', files[0]);

    this.data = formData.get('avatar');

    this.getinfoProvider.getCreatLecture({l_title: form.value.l_title, l_intro: form.value.l_intro, c_name: form.value.category, l_imgname: this.data.name, email: sessionStorage.getItem("email"), name: sessionStorage.getItem("name" )}).then(
      data => {
        let res: any = data;

        this.http.post(`${this.apiUrl}/upload`, formData)
      .subscribe(res => {
        
        console.log("고생했다",res);

        alert("강의가 개설되었습니다.");

        this.location.go('/lecture');
        window.location.reload();
        

      });
      }
    );


      
  }


  ngAfterViewInit() {
    $(function(){
      

    })
  }

  ngOnInit(): void {


    if(!sessionStorage.getItem("email")){
      alert("로그인이 필요한 서비스입니다.");
      this.router.navigate(['/login']);
  }else{
      
      this.router.navigate(['/lecture/createLecture']);
  } 
    
  }
}
