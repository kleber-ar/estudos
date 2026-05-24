@app.errorhandler(404)
def page_not_found(e):
    return render_template('notFound.html'), 404

# if __name__ == "__main__":
#     start_server()
