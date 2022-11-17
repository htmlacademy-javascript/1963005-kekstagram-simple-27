import { renderingMiniature } from './rendering-miniatures.js';
import { setUserFormSubmit, onUploadFormClose } from './form.js';
import { getDataPhotosList } from './api.js';
import './add-photo-effect.js';
import './upload-new-photo.js';

getDataPhotosList(renderingMiniature);
setUserFormSubmit(onUploadFormClose);
