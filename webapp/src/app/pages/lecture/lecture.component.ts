import { Component, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';


@Component({
  templateUrl: './lecture.component.html'
})
export class LectureComponent implements AfterViewInit {
  subtitle: string;
  data : any = [];
  lectureList : any = [];
  email : any = [];

  apiUrl = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000';

  form: FormGroup;
  loading = false;
  imageSrc: any = ' ';

  result;



  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router, private getinfoProvider: GetinfoProvider) {
    this.subtitle = 'lecture';
    console.log(this.subtitle);

    this.form = this.fb.group({
      avatar: ['', Validators.required]
    });

  }

  onFileChange(files: FileList) {
    if (files && files.length > 0) {
      // For Preview
      const file = files[0];
      const reader = new FileReader();

      /* 브라우저는 보안 문제로 인해 파일 경로의 참조를 허용하지 않는다.
        따라서 파일 경로를 img 태그에 바인딩할 수 없다.
        FileReader.readAsDataURL 메소드를 사용하여 이미지 파일을 읽어
        base64 인코딩된 스트링 데이터를 취득한 후, img 태그에 바인딩한다. */
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result;
      };

      /* reactive form에서 input[type="file"]을 지원하지 않는다.
        즉 파일 선택 시에 값이 폼컨트롤에 set되지 않는다
        https://github.com/angular/angular.io/issues/3466
        form validation을 위해 file.name을 폼컨트롤에 set한다. */
      this.avatar.setValue(file.name);
    }
  }

  onSubmit(files: FileList) {
    const formData = new FormData();
    formData.append('avatar', files[0]);

    console.log("난 뭐임");
    
    this.data = formData.get('avatar');
    

    this.loading = true;
    // Send data (payload = formData)
    console.log(formData.get('avatar'));
    console.log(this.data.name);

    // 폼데이터를 서버로 전송한다.
    this.http.post(`${this.apiUrl}/upload`, formData)
      .subscribe(res => {
        this.result = res;
        this.loading = false;
        this.avatar.setValue(null);
      });
  }

  get avatar() {
    return this.form.get('avatar');
  }

  creatLecture(){
    this.router.navigate(['/lecture/createLecture'])
  }

  lDetail(lecture: any){
    this.router.navigate(['/lecture/lectureDetail', lecture]);
    
  }

  ngAfterViewInit() {

    console.log("왜안돼");

    this.getinfoProvider.getLectureList().then(
      data => {
        let res: any = data;
           this.lectureList = res;


           console.log("asdasd",this.lectureList);
           
      }
    );

  }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("email");
    
  }
}
