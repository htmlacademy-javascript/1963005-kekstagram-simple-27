import { renderingMiniature } from './rendering-miniatures.js';
import { setUserFormSubmit, closeUploadForm } from './form.js';
import { getDataPhotosList } from './api.js';
import './add-photo-effect.js';
import './upload-new-photo.js';

getDataPhotosList(renderingMiniature);
setUserFormSubmit(closeUploadForm);
