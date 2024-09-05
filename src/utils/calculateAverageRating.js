export default (reviews) => {
  if (reviews.length > 0) {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    // Format the average rating to 1 decimal place
    const formattedAverageRating = averageRating.toFixed(1);

    return parseFloat(formattedAverageRating);
  } else {
    return 0; // or handle cases with no reviews as needed
  }
};
