import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','./about.component.scss']
})
export class AboutComponent {
  images: any[] = [
    {
        previewImageSrc:
'../../../assets/images/testimonial/user/1.jpg',
        thumbnailImageSrc:
'../../../assets/images/testimonial/user/1.jpg',
        comment: 'The facilities are well maintained. And the staff were warm welcoming and very helpful. I was very satisfied with the sport club services. I will be continuing my journey with them!',
        name: 'Anna Blake'
    },
    {
        previewImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
        thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
        alt: 'Angular for Front end',
        title: 'Angular'
    },
    {
        previewImageSrc:
            'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
        thumbnailImageSrc:
            'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
        alt: 'Java Programming Language',
        title: 'Java'
    },
    {
        previewImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
        thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
        alt: 'HyperText Markup Language',
        title: 'HTML'
    },
];
}
