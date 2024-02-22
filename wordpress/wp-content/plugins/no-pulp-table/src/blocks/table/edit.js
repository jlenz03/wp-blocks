/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
// import { __ } from '@wordpress/i18n';

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
import React from "react";
import {BlockSettings} from "./BlockSettings";


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const {attributes, setAttributes} = props
	const divStyles = {
		borderColor: attributes.borderColor,
		color: attributes.textColor
	}
	return (
		<div { ...useBlockProps({className: attributes.backgroundColorClass, style: divStyles}) }>
			<BlockSettings
				attributes={attributes}
				setAttributes={setAttributes}
			/>

				<div className="wp-block-jl-editor-table">
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
						<PlainText className ="artist"
								   placeholder="Artist Name"
								   value={attributes.artist}
								   onChange={artist => setAttributes({artist})}
						/>
						<PlainText className ="text"
								   placeholder="Favorite Song"
								   value={attributes.favorite}
								   onChange={favorite => setAttributes({favorite})}
						/>
						<div className="stars">

							<StarRating rating={attributes.stars} setRating={stars => setAttributes({stars:parseInt(stars)})} />

						</div>
					</div>

				</div>
			</div>


	);
}
