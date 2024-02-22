/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
import StarRating from "../../../components/StarRating";
export default function save({attributes}) {
	let starIcons = Array(5).fill('★', 0, attributes.stars).join('');
	const divStyles = {
		borderColor: attributes.borderColor,
		color: attributes.textColor
	}
	return (
		<div { ...useBlockProps.save({className: attributes.backgroundColorClass, style: divStyles}) }>

			<div className="wp-block-jl-editor-table">
				<div className="photo">
					<img src={attributes.imgUrl} alt="Photo of a Taylor Swift Album"/>
				</div>
				<div className="text">
					<p className="artist">{attributes.artist}</p>
					<p className="favorite">{attributes.favorite}</p>
					<div className="stars">{starIcons}</div>
				</div>

			</div>

		</div>
	);
}
