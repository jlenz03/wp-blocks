<?php
/**
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
* @var array $attributes
* @var string $contents
* @var WP_Block $block
 */

$query = new WP_Query([
	'post_type' => 'review',
	'orderby' => 'post_title',
	'order' => 'asc',
]);
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while($query->have_posts()):
	$query->the_post(); ?>
		<div style="background-color: <?= $attributes['cardColor'] ?>">
			<h2><span class="position" style="color: <?= $attributes['headingColor'] ?>"><?= get_post_meta(get_the_ID(), 'review_title', true)?>

					<p><span class="position" style="color: <?= $attributes['headingColor'] ?>"><?= get_post_meta(get_the_ID(), 'rating', true)?>
			<p><span class="bio" style="color: <?= $attributes['headingColor'] ?>"><?= get_post_meta(get_the_ID(), 'movie_title', true)?>
			<p><span class="bio" style="color: <?= $attributes['headingColor'] ?>"><?= get_post_meta(get_the_ID(), 'user_name', true)?>


					<div class="bio" style="color: <?= $attributes['textColor'] ?>">
				<p><?= get_the_excerpt()?></p>
			</div>
		</div>


<?php endwhile; ?>
</div>
