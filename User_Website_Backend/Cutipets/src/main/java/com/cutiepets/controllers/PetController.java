package com.cutiepets.controllers;

import com.cutiepets.petdtos.PetDTO;
import com.cutiepets.services.PetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetController {

    @Autowired
    private PetService petService;

    @GetMapping
    public List<PetDTO> getAllAvailablePets() {
        return petService.getAllAvailablePets();
    }

    @GetMapping("/type/{typeId}")
    public List<PetDTO> getPetsByPetType(@PathVariable Integer typeId) {
        return petService.getPetsByPetType(typeId);
    }

    @GetMapping("/type/{typeId}/breed/{breedId}")
    public List<PetDTO> getPetsByTypeAndBreed(@PathVariable Integer typeId,
                                              @PathVariable Integer breedId) {
        return petService.getPetsByTypeAndBreed(typeId, breedId);
    }

    @GetMapping("/filter")
    public List<PetDTO> filterPets(@RequestParam(required = false) Integer typeId,
                                   @RequestParam(required = false) Integer breedId,
                                   @RequestParam(required = false) Integer minAge,
                                   @RequestParam(required = false) Integer maxAge,
                                   @RequestParam(required = false) String gender,
                                   @RequestParam(required = false) Double minPrice,
                                   @RequestParam(required = false) Double maxPrice) {
        return petService.filterPets(typeId, breedId, minAge, maxAge, gender, minPrice, maxPrice);
    }

    @GetMapping("/{id}")
    public PetDTO getPetById(@PathVariable Integer id) {
        return petService.getPetById(id);
    }
}
