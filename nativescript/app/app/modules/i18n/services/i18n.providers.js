// import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
//
// export class TranslationProviders {
//
//   public getTranslationFile = (): Promise<any> => {
//     let noProviders: Object[] = [];
//
//     // Define a way to retrieve the local information
//     let locale: string = 'en-US';
//
//     // Set the directory to the translation files
//     let file: string = `../assets/locale/messages.${locale}.xlf`;
//
//     if(!locale || locale === 'en-US') return Promise.resolve(noProviders);
//
//     return new Promise(function (resolve, reject) {
//       let xhr = new XMLHttpRequest;
//       xhr.open('GET', file);
//       xhr.onload = (data: any) => resolve(
//         [
//           { provide: TRANSLATIONS, useValue: data.target.response },
//           { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
//           { provide: LOCALE_ID, useValue: locale }
//         ]
//       );
//       xhr.onerror = () => reject(noProviders);
//       xhr.send();
//     });
//   }
// };
//
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpMThuLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBZ0Y7QUFDaEYsRUFBRTtBQUNGLHNDQUFzQztBQUN0QyxFQUFFO0FBQ0Ysc0RBQXNEO0FBQ3RELHNDQUFzQztBQUN0QyxFQUFFO0FBQ0Ysd0RBQXdEO0FBQ3hELG9DQUFvQztBQUNwQyxFQUFFO0FBQ0Ysb0RBQW9EO0FBQ3BELG9FQUFvRTtBQUNwRSxFQUFFO0FBQ0YsNkVBQTZFO0FBQzdFLEVBQUU7QUFDRixzREFBc0Q7QUFDdEQsc0NBQXNDO0FBQ3RDLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFDN0MsWUFBWTtBQUNaLHVFQUF1RTtBQUN2RSwrREFBK0Q7QUFDL0QscURBQXFEO0FBQ3JELFlBQVk7QUFDWixXQUFXO0FBQ1gsaURBQWlEO0FBQ2pELG9CQUFvQjtBQUNwQixVQUFVO0FBQ1YsTUFBTTtBQUNOLEtBQUs7QUFDTCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVFJBTlNMQVRJT05TLCBUUkFOU0xBVElPTlNfRk9STUFULCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9cclxuLy8gZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uUHJvdmlkZXJzIHtcclxuLy9cclxuLy8gICBwdWJsaWMgZ2V0VHJhbnNsYXRpb25GaWxlID0gKCk6IFByb21pc2U8YW55PiA9PiB7XHJcbi8vICAgICBsZXQgbm9Qcm92aWRlcnM6IE9iamVjdFtdID0gW107XHJcbi8vXHJcbi8vICAgICAvLyBEZWZpbmUgYSB3YXkgdG8gcmV0cmlldmUgdGhlIGxvY2FsIGluZm9ybWF0aW9uXHJcbi8vICAgICBsZXQgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnO1xyXG4vL1xyXG4vLyAgICAgLy8gU2V0IHRoZSBkaXJlY3RvcnkgdG8gdGhlIHRyYW5zbGF0aW9uIGZpbGVzXHJcbi8vICAgICBsZXQgZmlsZTogc3RyaW5nID0gYC4uL2Fzc2V0cy9sb2NhbGUvbWVzc2FnZXMuJHtsb2NhbGV9LnhsZmA7XHJcbi8vXHJcbi8vICAgICBpZighbG9jYWxlIHx8IGxvY2FsZSA9PT0gJ2VuLVVTJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub1Byb3ZpZGVycyk7XHJcbi8vXHJcbi8vICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4vLyAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0O1xyXG4vLyAgICAgICB4aHIub3BlbignR0VUJywgZmlsZSk7XHJcbi8vICAgICAgIHhoci5vbmxvYWQgPSAoZGF0YTogYW55KSA9PiByZXNvbHZlKFxyXG4vLyAgICAgICAgIFtcclxuLy8gICAgICAgICAgIHsgcHJvdmlkZTogVFJBTlNMQVRJT05TLCB1c2VWYWx1ZTogZGF0YS50YXJnZXQucmVzcG9uc2UgfSxcclxuLy8gICAgICAgICAgIHsgcHJvdmlkZTogVFJBTlNMQVRJT05TX0ZPUk1BVCwgdXNlVmFsdWU6ICd4bGYnIH0sXHJcbi8vICAgICAgICAgICB7IHByb3ZpZGU6IExPQ0FMRV9JRCwgdXNlVmFsdWU6IGxvY2FsZSB9XHJcbi8vICAgICAgICAgXVxyXG4vLyAgICAgICApO1xyXG4vLyAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHJlamVjdChub1Byb3ZpZGVycyk7XHJcbi8vICAgICAgIHhoci5zZW5kKCk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH07XHJcbi8vXHJcbiJdfQ==