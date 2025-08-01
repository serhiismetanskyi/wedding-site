// Generator JavaScript

// Function to transliterate Latin to Cyrillic
function transliterateToCyrillic(text) {
    var latin = {
        'a': 'а', 'b': 'б', 'v': 'в', 'h': 'г', 'g': 'ґ', 'd': 'д', 'e': 'е', 'ye': 'є',
        'zh': 'ж', 'z': 'з', 'y': 'и', 'i': 'і', 'yi': 'ї', 'iy': 'й', 'k': 'к', 'l': 'л',
        'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у',
        'f': 'ф', 'kh': 'х', 'ts': 'ц', 'ch': 'ч', 'sh': 'ш', 'shch': 'щ',
        'yu': 'ю', 'ya': 'я', 'j': 'ь',
        'A': 'А', 'B': 'Б', 'V': 'В', 'H': 'Г', 'G': 'Ґ', 'D': 'Д', 'E': 'Е', 'Ye': 'Є',
        'Zh': 'Ж', 'Z': 'З', 'Y': 'И', 'I': 'І', 'Yi': 'Ї', 'K': 'К', 'L': 'Л',
        'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'П', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У',
        'F': 'Ф', 'Kh': 'Х', 'Ts': 'Ц', 'Ch': 'Ч', 'Sh': 'Ш', 'Shch': 'Щ',
        'Yu': 'Ю', 'Ya': 'Я', 'J': 'Ь', 'Y': 'И'
    };
    
    // Handle special cases first
    text = text.replace(/shch/g, 'щ');
    text = text.replace(/Shch/g, 'Щ');
    text = text.replace(/zh/g, 'ж');
    text = text.replace(/Zh/g, 'Ж');
    text = text.replace(/kh/g, 'х');
    text = text.replace(/Kh/g, 'Х');
    text = text.replace(/ts/g, 'ц');
    text = text.replace(/Ts/g, 'Ц');
    text = text.replace(/ch/g, 'ч');
    text = text.replace(/Ch/g, 'Ч');
    text = text.replace(/sh/g, 'ш');
    text = text.replace(/Sh/g, 'Ш');
            text = text.replace(/yu/g, 'ю');
        text = text.replace(/Yu/g, 'Ю');
        text = text.replace(/ya/g, 'я');
        text = text.replace(/Ya/g, 'Я');
        text = text.replace(/y/g, 'и');
        text = text.replace(/Y/g, 'И');
    text = text.replace(/ye/g, 'є');
    text = text.replace(/Ye/g, 'Є');
            text = text.replace(/yi/g, 'ї');
        text = text.replace(/Yi/g, 'Ї');
        text = text.replace(/iy/g, 'й');
        text = text.replace(/Iy/g, 'Й');
        text = text.replace(/sj/g, 'сь');
    text = text.replace(/Sj/g, 'Сь');
    text = text.replace(/j/g, 'ь');
    text = text.replace(/J/g, 'Ь');
            text = text.replace(/ap/g, "'");
        text = text.replace(/Ap/g, "'");

    
    // Handle single characters
    var result = text.split('').map(function(char) {
        return latin[char] || char;
    }).join('');
    
    // Capitalize first letter of each word and replace hyphens with spaces
    var withSpaces = result.replace(/-/g, ' ');
    return withSpaces.replace(/(^|\s)\S/g, function(l) { return l.toUpperCase(); });
}

// Function to transliterate Cyrillic to Latin
function transliterateToLatin(text) {
    var cyrillic = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ye',
        'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'iy', 'к': 'k', 'л': 'l',
        'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': 'j',
        "'": "'", // Keep apostrophe as apostrophe
        'сь': 'sj', 'Сь': 'Sj',
        'ю': 'yu', 'я': 'ya',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'Ye',
        'Ж': 'Zh', 'З': 'Z', 'И': 'Y', 'І': 'I', 'Ї': 'Yi', 'Й': 'Y', 'К': 'K', 'Л': 'L',
        'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
        'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ь': 'J',
        'Ю': 'Yu', 'Я': 'Ya'
    };
    
    // Handle special cases first
    text = text.replace(/сь/g, 'sj');
    text = text.replace(/Сь/g, 'Sj');
    text = text.replace(/й/g, 'iy');
    text = text.replace(/Й/g, 'Iy');
    
    return text.split('').map(function(char) {
        return cyrillic[char] || char;
    }).join('');
}

// Function to create clean URL
function createCleanUrl(name) {
    return transliterateToLatin(name)
        .toLowerCase()
        .replace(/'/g, 'ap') // Replace apostrophes with 'ap'
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Function to create invitation link
function createInvitationLink(name) {
    var cleanName = createCleanUrl(name);
    return window.location.origin + '/index.html?name=' + cleanName;
}

// Global variable to store current link
var currentLink = '';

// Function to generate invitation
function generateInvitation() {
    var guestName = document.getElementById('guest-name-input').value.trim();
    
    if (!guestName) {
        alert('Будь ласка, введіть ім\'я гостя');
        return;
    }
    
    var link = createInvitationLink(guestName);
    currentLink = link;
    
    // Store original name for when the link is used
    sessionStorage.setItem('originalGuestName', guestName);
    
    // Display the result
    document.getElementById('generated-link').textContent = link;
    document.getElementById('invitation-result').style.display = 'block';
    
    // Add success animation
    document.getElementById('invitation-result').classList.add('success-animation');
    setTimeout(function() {
        document.getElementById('invitation-result').classList.remove('success-animation');
    }, 600);
    
    // Scroll to result
    document.getElementById('invitation-result').scrollIntoView({ behavior: 'smooth' });
}

// Function to copy invitation link
function copyInvitationLink() {
    if (currentLink) {
        // Create temporary input element
        var tempInput = document.createElement('input');
        tempInput.value = currentLink;
        document.body.appendChild(tempInput);
        
        // Select and copy
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        document.execCommand('copy');
        
        // Remove temporary element
        document.body.removeChild(tempInput);
        
        // Show success message
        showNotification('Посилання скопійовано в буфер обміну!', 'success');
    }
}



// Function to show notification
function showNotification(message, type) {
    // Create notification element
    var notification = document.createElement('div');
    notification.className = 'notification ' + type;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(function() {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(function() {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
var style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add enter key support for input
document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('guest-name-input');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateInvitation();
            }
        });
        
        // Focus on input when page loads
        input.focus();
    }
}); 
