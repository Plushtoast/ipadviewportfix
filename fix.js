Hooks.on("renderSettings", (app, html, data) => {
    const button = $(`<button data-tooltip="Set the performance mode to low."><i class="fas fa-bug"></i>iOS Fix</button>`);
    const location = html.find("#settings-game")
    location.append(button);
    button.on('click',async() => { 
        await game.settings.set("core","performanceMode", 0) 
        ui.notifications.warn("Performance mode set to low. Reloading the page to apply changes.")
        setTimeout(() => {
            window.location.reload();
        }, 1000)
        
    })
})
