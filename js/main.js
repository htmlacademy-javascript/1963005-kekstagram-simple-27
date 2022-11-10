import { publishedPhotos } from './create-photo-description.js';
import { renderingMiniature } from './rendering-miniatures.js';
import { openPhotoUploadForm } from './form.js';
import './upload-photo-size-scale.js';
import './add-photo-effect.js';

renderingMiniature(publishedPhotos);
openPhotoUploadForm();
