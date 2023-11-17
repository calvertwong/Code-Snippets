# Code snippet for AWS S3 operations written in Typescript and Node Express Framework
### Requires: AWS Access Key and Secret Access Key from AWS IAM
- s3-upload.ts: Upload multiple files with ``multer`` and ``@aws-sdk/client-s3``
- s3-download-less-typed.ts: Download multiple files with``@aws-sdk/client-s3`` (using type cast instead of type guard)
- s3-download.ts: Download multiple files with ``@aws-sdk/client-s3``
- s3-delete.ts: Delete multiple files with ``@aws-sdk/client-s3``
- s3-getSignedUrl.ts: Get temporary signed url of S3 objects with ``@aws-sdk/s3-request-presigner`` and ``@aws-sdk/client-s3``
