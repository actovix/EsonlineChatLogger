


function right_url(pagename) {
    var pageurl = window.location.href;
    var pg = pageurl.split("/"); 
    
    return pg.length == 9;
}

function chat_observer() 
{
    const target = document.querySelector('.chat');

    const config = { childList: true };

    const callback = (mutatList, observer) =>
    {
        for ( const mutation in mutatList )
        {
            if(mutation.type === 'childList')
            {
                const t = document.querySelector('.messages');
                console.log(t.innerHTML);
            }
        }
    };
}