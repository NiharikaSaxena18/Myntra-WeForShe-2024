document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.know-more');
    const infoBox = document.querySelector('.info-box');

    btn.addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = ` <div class="info-content">
    <h2>Badges and Rewards Overview</h2>
    <p>Explore the various badges and rewards you can earn:</p>
    
    <div class="badge-section">
        <h3>Monthly Badges</h3>
        <p>Earn monthly badges by participating and excelling in challenges (contests). The top 30 contestants on the leaderboard are awarded the monthly top-win badge.</p>
    </div>
    
    <div class="badge-section">
        <h3>Platinum Badge</h3>
        <p>The top 3 contestants in each category are awarded the prestigious platinum badge.</p>
    </div>
    
    <h2>Benefits of Earning Badges</h2>
    <ul>
        <li>Recognition among the community for your achievements.</li>
        <li>Access to exclusive events and workshops related to your badge category.</li>
        <li>Priority consideration for brand collaborations and sponsored content opportunities.</li>
    </ul>
    
    <h2>Points and Rewards for Sharing Purchases</h2>
    <ul>
        <li>Share your purchase with friends: For each friend who makes a purchase through your link, you earn 20 points.</li>
        <li>Accumulate points to unlock rewards:</li>
        <li>At 500 points, you receive a 10% discount on selected brands.</li>
        <li>At 1000 points, you get a $50 gift card redeemable at our partner stores.</li>
        <li>At 1500 points, you gain access to an exclusive offer on a brand of your choice.</li>
        <li>Points are cumulative and can be redeemed at any time.</li>
    </ul>
    
    <h2>Additional Benefits</h2>
    <ul>
        <li>Gain early access to new collections and exclusive sales events.</li>
        <li>Receive personalized style recommendations based on your preferences and previous purchases.</li>
    </ul>
</div>

        
        `
        // Center info box on window resize
        window.addEventListener('resize', centerInfoBox);
        centerInfoBox();
    });

    // Close info box if clicked outside
    document.addEventListener('click', function(event) {
        if (!infoBox.contains(event.target) && event.target !== btn) {
            infoBox.style.display = 'none';
        }
    });

    function centerInfoBox() {
        infoBox.style.top = `50%`;
        infoBox.style.left = `50%`;
        infoBox.style.transform = `translate(-50%, -50%)`;
    }
});
