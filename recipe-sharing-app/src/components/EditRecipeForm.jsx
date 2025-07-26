     className="border p-1 w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-1 w-full mt-2"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-1 mt-2 r>
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;

