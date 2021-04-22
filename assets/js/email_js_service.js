window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // these IDs from the previous steps
        emailjs.sendForm('service_smilin_portfolio', 'template_2091tws', this)
            .then(function() {
                alert("Email Sent!")
            }, function() {
                alert("Failed to send email, report issue to page owner");
            });
    });
}