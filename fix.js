Hooks.on("renderSettings", (app, html, data) => {
    const button = $(`<button data-tooltip="Set the performance mode to low."><i class="fas fa-bug"></i>iOS Fix</button>`);
    const location = html.find("#settings-game")
    location.append(button);
    button.on('click',async() => { 
        await game.settings.set("core","performanceMode", 0) 
        window.location.reload();
    })
})