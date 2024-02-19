/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, PlainText, MediaUploadCheck, MediaUpload} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import StarRating from "../../../components/StarRating";
import {SelectControl} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div { ...useBlockProps() }>

				<div className="album-information">
					<div className="photo">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={'image'}
								onSelect={file => {
									console.log(file);
									setAttributes({imgUrl: file.sizes.thumbnail.url})}}
								render={({open})=> <img src={attributes.imgUrl}
														alt="upload a photo"
														onClick={open}
								/> }
							/>
						</MediaUploadCheck>

					</div>
					<div className="text">
						<PlainText cassName ="artist"
								   placeholder="Taylor Swift"
								   value={attributes.artist}
								   onChange={artist => setAttributes({artist})}
						/>
						<PlainText cassName ="text"
								   placeholder="Favorite Song"
								   value={attributes.favorite}
								   onChange={favorite => setAttributes({favorite})}
						/>

					</div>
					<div className="stars">
						<SelectControl
							label="Select a Rating"
							value ={attributes.stars}
							onChange={stars => setAttributes({stars:parseInt(stars)})}
							options={[
								{value: 1, label:'★'},
								{value: 2, label:'★★'},
								{value: 3, label:'★★★'},
								{value: 4, label:'★★★★'},
								{value: 5, label:'★★★★★'},
							]}
						/>
						<StarRating rating={attributes.stars} setRating={stars => setAttributes({stars:parseInt(stars)})} />

					</div>
				</div>
			</div>

		</div>
	);
}
