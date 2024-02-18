/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<h2>Simple HTML Table SAVED</h2>

			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>Country</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>John Doe</td>
					<td>30</td>
					<td>USA</td>
				</tr>
				<tr>
					<td>Jane Smith</td>
					<td>25</td>
					<td>Canada</td>
				</tr>
				<tr>
					<td>David Johnson</td>
					<td>40</td>
					<td>UK</td>
				</tr>
				</tbody>
			</table>

		</div>
	);
}
