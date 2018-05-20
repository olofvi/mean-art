import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import key from ''

@Injectable()
export class UploadFileService {

  FOLDER = 'jsa-s3/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        #\accessKeyId: 'AKIAIGRBXDMAONNZAFMA',
        secretAccessKey: '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'\,
        region: 'eu-west-3'
      }
    );

    const params = {
      Bucket: 'mean-art',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
